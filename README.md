BFHL Array Processing API
=========================

**Objective**
-------------

This project implements a **REST API** that processes an input array and returns a structured response including:

1.  Status of operation (is\_success)
    
2.  User ID in the format {full\_name\_ddmmyyyy} (full name lowercase)
    
3.  Email ID
    
4.  College Roll Number
    
5.  Array of **even numbers** (as strings)
    
6.  Array of **odd numbers** (as strings)
    
7.  Array of **alphabets**, converted to uppercase
    
8.  Array of **special characters**
    
9.  Sum of numeric elements (returned as a string)
    
10.  Concatenation of all alphabetical characters in **reverse order with alternating caps**
    

The API is hosted and available for testing on /bfhl route.

**Tech Stack**
--------------

*   Node.js
    
*   Express.js
    
*   dotenv (for environment variables)
    
*   Hosting: \[Railway / Render / Vercel\]
    

**Installation / Setup**
------------------------

1.  Clone the repository:
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`git clone   cd` 

1.  Install dependencies:
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install   `

1.  Create a .env file (optional) to define your PORT:
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   PORT=3000   `

1.  Start the server locally:
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm run dev   `

*   The server will run on http://localhost:3000
    

**API Routes**
--------------

### **GET /verify**

*   **Purpose:** Health check / verification
    
*   **Response:**
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "is_success": true,    "message": "API is running successfully",    "timestamp": "2025-08-29T05:00:00.000Z"  }   `

### **POST /bfhl**

*   **Purpose:** Process input array and return structured response
    
*   **Request Body:**
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "full_name": "John Doe",    "dob": "17091999",    "email": "john@xyz.com",    "roll_number": "ABCD123",    "data": ["a","1","334","4","R","$"]  }   `

*   **Response Example (Example A):**
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "is_success": true,    "user_id": "john_doe_17091999",    "email": "john@xyz.com",    "roll_number": "ABCD123",    "odd_numbers": ["1"],    "even_numbers": ["334","4"],    "alphabets": ["A","R"],    "special_characters": ["$"],    "sum": "339",    "concat_string": "Ra"  }   `

*   **Notes:**
    
    *   All numbers are returned as **strings**.
        
    *   Alphabets are uppercased in the alphabets array.
        
    *   concat\_string reverses all alphabetical characters and applies alternating caps.
        
    *   Any non-alphanumeric characters are returned in special\_characters.
        

**Example Requests & Responses**
--------------------------------

### Example B

**Request:**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "data": ["2","a","y","4","&","-","*","5","92","b"]  }   `

**Response:**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "is_success": true,    "user_id": "john_doe_17091999",    "email": "john@xyz.com",    "roll_number": "ABCD123",    "odd_numbers": ["5"],    "even_numbers": ["2","4","92"],    "alphabets": ["A","Y","B"],    "special_characters": ["&","-","*"],    "sum": "103",    "concat_string": "ByA"  }   `

### Example C

**Request:**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "data": ["A","ABcD","DOE"]  }   `

**Response:**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "is_success": true,    "user_id": "john_doe_17091999",    "email": "john@xyz.com",    "roll_number": "ABCD123",    "odd_numbers": [],    "even_numbers": [],    "alphabets": ["A","ABCD","DOE"],    "special_characters": [],    "sum": "0",    "concat_string": "EoDdCbAa"  }   `

**Deployment**
--------------

*   Hosted API endpoint (example):
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   https://your-hosted-url.com/bfhl   `

*   Use this URL for form submission or testing.
