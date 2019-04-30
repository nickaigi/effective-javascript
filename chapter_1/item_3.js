// beware of implicit coercions
3 + true;  // 4

// special cases exist where js raises an error
"hello"(1);   // error: not a function
null.x;       // error: cannot read property 'x' of null
