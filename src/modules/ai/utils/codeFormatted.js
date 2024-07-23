export function formatCodeString(str, language) {
    const languagePattern = new RegExp(`^\\\`\\\`\\\`${language}\\\n`);
    return str
        .replace(languagePattern, '')  
        .replace(/\\n```$/, '')        
        .replace(/\\n/g, '\n');        
}