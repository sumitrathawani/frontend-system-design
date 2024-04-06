

# Notes
 There are several ways for mitigation XSS

 1. List all possible way to take user input  in you application :-
    - it can be url
    - it can be form
    - or it can be any damn thing , because once you can trust your ex 😉 but trusting the user input, that is not going to work.

  
2. Replace InnerHTML to InnerText 

   - When you set the innerText of an element to a string that includes HTML tags or JavaScript code, such as <script>alert("XSS attack");</script>, the browser treats it as plain text and does not interpret it as HTML or execute any scripts. Therefore, the output will be the literal text including the HTML tags and JavaScript code, without executing the script:

 
```
const element = document.getElementById('exampleElement');
element.innerText = userInput; // Safe from XSS

```

3. Escaping mechanism
4. Using library like React
    - React automatically escape user input by default, reducing the risk of XSS attacks

5. DomPurify- To sanitize your data




6. CSP Headers (Content Security Policy Headers)
     - Allowed Sources
     - Script Nonces
     - Report-only mode (it works on Https only)
        

                         


