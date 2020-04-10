function generateMarkdown(data) {

  return `  
  # ${data.projTitle}
            
  ${data.projDescr}
        
  ## Table of Contents
      
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Questions](#FAQs)
        
  ## Usage
      
  ${data.use}     
      
  ## Installation    
      
  ${data.installInstr}          
      
  ## License    
      
  ${data.license}    
      
  ## Contributing    
      
  ${data.contribs}
          
  ## Test
          
  ${data.tests}
      
  ## Contact
      
  [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
