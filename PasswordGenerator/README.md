# React Hooks
## useCallback
```
1. When useCallback is first called with dependencies (e.g., [2, true, true]), the function is created and memoized.
2. If the function is called again with the same dependencies, React reuses the memoized version without re-creating it.
3. If any dependency changes (e.g., [3, true, true]), React re-creates the function with the new dependency values.
4. React ensures the function is only re-created when dependencies in the array change.
5. This optimization prevents unnecessary function re-creations and improves performance.
```
- **The primary purpose of the useCallback hook is to improve performance in React applications.**

## useEffect
```
1. useEffect runs after the component renders and observes changes in its dependency array.
2. If dependencies change, the useEffect function re-executes.
3. With an empty dependency array [], it runs only once after the initial render.
4. Without a dependency array, it runs after every render (not recommended).
5. It’s used for side effects like data fetching, subscriptions, or DOM updates.
```

### code
```javascript
const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq";

    if (numberAllowed) 
      str += "0123456789";
    if (characterAllowed)
      str += "`!@#$%^&*()_+}{[]?|~";

    for (let i=1; i<=length; i++) {
      let charIdx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIdx)
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
```
#### Explaination
- The function (setPassword) itself remains the same across renders. React doesn't create a new setPassword function each time your component re-renders.
- However, the arguments passed to the function may change. For example, when you call setPassword(newPassword), the newPassword value might change with each call, but the setPassword function itself stays the same.