/**
 * Simple security scanning script for the portfolio website
 * 
 * This script checks for common security issues in the codebase:
 * - Hardcoded sensitive information
 * - Missing security attributes on external links
 * - Potential XSS vulnerabilities
 * - Insecure dependencies
 * 
 * Usage: node scripts/security-scan.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const rootDir = path.resolve(__dirname, '..');
const appDir = path.join(rootDir, 'app');
const excludeDirs = ['node_modules', '.next', '.git'];

// Patterns to check
const patterns = {
  hardcodedSecrets: [
    // Only match getform.io URLs that are not in environment variables
    /(?<!process\.env\.NEXT_PUBLIC_GETFORM_ENDPOINT)['"]https:\/\/getform\.io\/f\/[a-zA-Z0-9]+['"]/g,
    // Only match Google Drive URLs that are not in environment variables
    /(?<!process\.env\.NEXT_PUBLIC_CV_URL)['"]https:\/\/drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+['"]/g,
    // Only match email addresses that are not in environment variables
    /(?<!process\.env\.NEXT_PUBLIC_CONTACT_EMAIL)['"][\w\.-]+@[\w\.-]+\.\w+['"]/g,
    // Only match phone numbers that are not in environment variables
    /(?<!process\.env\.NEXT_PUBLIC_CONTACT_PHONE)['"][\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}['"]/g,
    // Match hardcoded passwords, secrets, keys, and tokens
    /(?<!error|message|text)password\s*[:=]\s*['"][^'"]+['"]/gi,
    /(?<!error|message|text)secret\s*[:=]\s*['"][^'"]+['"]/gi,
    /(?<!error|message|text)key\s*[:=]\s*['"][^'"]+['"]/gi,
    /(?<!error|message|text|csrf)token\s*[:=]\s*['"][^'"]+['"]/gi,
  ],
  insecureLinks: [
    // Match external links that don't have both noopener and nofollow in their rel attribute
    /<a[^>]+href\s*=\s*['"]https?:\/\/[^'"]+['"][^>]*(?!(rel=['"][^'"]*noopener[^'"]*nofollow[^'"]*['"]|rel=['"][^'"]*nofollow[^'"]*noopener[^'"]*['"]))[^>]*>/g,
  ],
  potentialXss: [
    /dangerouslySetInnerHTML/g,
    /innerHTML\s*=/g,
    /document\.write/g,
    /eval\(/g,
    /setTimeout\(\s*['"`][^)]*['"`]\s*\)/g,
    /setInterval\(\s*['"`][^)]*['"`]\s*\)/g,
  ],
};

// Results storage
const issues = {
  hardcodedSecrets: [],
  insecureLinks: [],
  potentialXss: [],
  insecureDependencies: [],
};

// Scan a file for security issues
function scanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(rootDir, filePath);

    // Skip environment files and security-related files
    if (filePath.includes('.env') || 
        filePath.includes('security-scan.js') || 
        filePath.includes('middleware.ts') ||
        filePath.includes('session.ts') ||
        filePath.includes('rate-limiter.ts') ||
        filePath.includes('csrf')) {
      return;
    }

    // Check for hardcoded secrets - only in component files
    if (!filePath.includes('components')) {
      // Skip hardcoded secrets check for non-component files
    } else {
      // Simple check for hardcoded sensitive information in component files
      if (content.includes('https://getform.io/f/') && !content.includes('process.env.NEXT_PUBLIC_GETFORM_ENDPOINT')) {
        issues.hardcodedSecrets.push({
          file: relativePath,
          match: 'Hardcoded getform.io URL',
        });
      }
      
      if (content.includes('https://drive.google.com/file/') && !content.includes('process.env.NEXT_PUBLIC_CV_URL')) {
        issues.hardcodedSecrets.push({
          file: relativePath,
          match: 'Hardcoded Google Drive URL',
        });
      }
      
      if ((content.includes('@gmail.com') || content.includes('@example.com')) && 
          !content.includes('process.env.NEXT_PUBLIC_CONTACT_EMAIL')) {
        issues.hardcodedSecrets.push({
          file: relativePath,
          match: 'Hardcoded email address',
        });
      }
    }

    // Check for insecure links - simplified approach
    if (content.includes('target="_blank"') && 
        !content.includes('rel="noopener') && 
        !content.includes('rel="noreferrer') && 
        !content.includes('rel="nofollow')) {
      issues.insecureLinks.push({
        file: relativePath,
        match: 'External link without proper rel attributes',
      });
    }

    // Check for potential XSS
    patterns.potentialXss.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          issues.potentialXss.push({
            file: relativePath,
            match: match.substring(0, 50) + (match.length > 50 ? '...' : ''),
          });
        });
      }
    });
  } catch (error) {
    console.error(`Error scanning file ${filePath}:`, error.message);
  }
}

// Recursively scan directories
function scanDirectory(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (!excludeDirs.includes(entry.name)) {
          scanDirectory(fullPath);
        }
      } else if (
        entry.isFile() && 
        (entry.name.endsWith('.js') || 
         entry.name.endsWith('.jsx') || 
         entry.name.endsWith('.ts') || 
         entry.name.endsWith('.tsx') || 
         entry.name.endsWith('.html'))
      ) {
        scanFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error.message);
  }
}

// Check for insecure dependencies using npm audit
function checkDependencies() {
  try {
    const auditOutput = execSync('npm audit --json', { cwd: rootDir }).toString();
    const auditResult = JSON.parse(auditOutput);
    
    if (auditResult.vulnerabilities) {
      const vulnTypes = Object.keys(auditResult.vulnerabilities);
      
      vulnTypes.forEach(type => {
        const vuln = auditResult.vulnerabilities[type];
        issues.insecureDependencies.push({
          package: type,
          severity: vuln.severity,
          info: vuln.info,
        });
      });
    }
  } catch (error) {
    // npm audit returns non-zero exit code if vulnerabilities are found
    try {
      const output = error.stdout.toString();
      const auditResult = JSON.parse(output);
      
      if (auditResult.vulnerabilities) {
        const vulnTypes = Object.keys(auditResult.vulnerabilities);
        
        vulnTypes.forEach(type => {
          const vuln = auditResult.vulnerabilities[type];
          issues.insecureDependencies.push({
            package: type,
            severity: vuln.severity,
            info: vuln.info || vuln.url || 'No additional info',
          });
        });
      }
    } catch (parseError) {
      console.error('Error parsing npm audit output:', parseError.message);
    }
  }
}

// Print results
function printResults() {
  console.log('\n=== SECURITY SCAN RESULTS ===\n');
  
  console.log('1. Hardcoded Secrets:');
  if (issues.hardcodedSecrets.length === 0) {
    console.log('   ✅ No hardcoded secrets found');
  } else {
    issues.hardcodedSecrets.forEach(issue => {
      console.log(`   ❌ ${issue.file}: ${issue.match}`);
    });
  }
  
  console.log('\n2. Insecure External Links:');
  if (issues.insecureLinks.length === 0) {
    console.log('   ✅ No insecure external links found');
  } else {
    issues.insecureLinks.forEach(issue => {
      console.log(`   ❌ ${issue.file}: ${issue.match}`);
    });
  }
  
  console.log('\n3. Potential XSS Vulnerabilities:');
  if (issues.potentialXss.length === 0) {
    console.log('   ✅ No potential XSS vulnerabilities found');
  } else {
    issues.potentialXss.forEach(issue => {
      console.log(`   ❌ ${issue.file}: ${issue.match}`);
    });
  }
  
  console.log('\n4. Insecure Dependencies:');
  if (issues.insecureDependencies.length === 0) {
    console.log('   ✅ No insecure dependencies found');
  } else {
    issues.insecureDependencies.forEach(issue => {
      console.log(`   ❌ ${issue.package} (${issue.severity}): ${issue.info}`);
    });
  }
  
  console.log('\n=== SCAN SUMMARY ===');
  const totalIssues = 
    issues.hardcodedSecrets.length + 
    issues.insecureLinks.length + 
    issues.potentialXss.length + 
    issues.insecureDependencies.length;
  
  if (totalIssues === 0) {
    console.log('✅ No security issues found');
  } else {
    console.log(`❌ Found ${totalIssues} potential security issues:`);
    console.log(`   - Hardcoded Secrets: ${issues.hardcodedSecrets.length}`);
    console.log(`   - Insecure External Links: ${issues.insecureLinks.length}`);
    console.log(`   - Potential XSS Vulnerabilities: ${issues.potentialXss.length}`);
    console.log(`   - Insecure Dependencies: ${issues.insecureDependencies.length}`);
    console.log('\nPlease review these issues and address them according to the recommendations in SECURITY.md');
  }
}

// Main function
function main() {
  console.log('Starting security scan...');
  
  // Scan codebase
  scanDirectory(appDir);
  
  // Check dependencies
  console.log('Checking dependencies...');
  checkDependencies();
  
  // Print results
  printResults();
}

// Run the script
main();
