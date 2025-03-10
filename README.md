# Recoil concepts:  

1. **`RecoilRoot`**  
   - The top-level component that enables Recoil state management in a React application.  
   - It must wrap the entire component tree where Recoil is used.  
   - Example:  
     ```jsx
     import { RecoilRoot } from 'recoil';

     function App() {
       return (
         <RecoilRoot>
           <MyComponent />
         </RecoilRoot>
       );
     }
     ```

2. **`atom`**  
   - Represents a piece of state that can be read and written by any component.  
   - Atoms are independent, meaning they don’t rely on other atoms or selectors.  
   - Example:  
     ```jsx
     import { atom } from 'recoil';

     const counterState = atom({
       key: 'counterState', // Unique ID
       default: 0,          // Default value
     });
     ```

3. **`useRecoilState(atomOrSelector)`**  
   - A React hook that works like `useState` but for Recoil atoms or selectors.  
   - It returns `[state, setState]`, allowing both reading and updating of the atom/selector.  
   - Example:  
     ```jsx
     import { useRecoilState } from 'recoil';

     function Counter() {
       const [count, setCount] = useRecoilState(counterState);
       return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
     }
     ```

4. **`useRecoilValue(atomOrSelector)`**  
   - A hook used when you only need to **read** an atom or selector but don’t need to update it.  
   - Prevents unnecessary re-renders caused by passing the setter function.  
   - Example:  
     ```jsx
     import { useRecoilValue } from 'recoil';

     function DisplayCount() {
       const count = useRecoilValue(counterState);
       return <p>Count: {count}</p>;
     }
     ```

5. **`useSetRecoilState(atomOrSelector)`**  
   - A hook that only provides a setter function to update the atom or selector without re-rendering on value read.  
   - Useful in event handlers or effects where you don’t need to read the current state.  
   - Example:  
     ```jsx
     import { useSetRecoilState } from 'recoil';

     function IncrementButton() {
       const setCount = useSetRecoilState(counterState);
       return <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>;
     }
     ```

6. **`selectors`**  
   - Functions that derive state based on atoms and other selectors.  
   - They can be **pure functions** (computed values) or **asynchronous selectors** (fetching data).  
   - Example of a computed selector:  
     ```jsx
     import { selector } from 'recoil';

     const doubleCountState = selector({
       key: 'doubleCountState',
       get: ({ get }) => get(counterState) * 2,
     });
     ```

   - Example of an async selector fetching data:  
     ```jsx
     const fetchUserData = selector({
       key: 'fetchUserData',
       get: async () => {
         const response = await fetch('https://api.example.com/user');
         return response.json();
       },
     });
     ```

## Summary 

1. **`RecoilRoot`** – The root component that enables Recoil state management in a React application.  
2. **`atom`** – Creates a piece of reactive state that can be read and updated by components.  
3. **`useRecoilState(atomOrSelector)`** – A hook that returns a stateful value and a function to update it, similar to `useState`.  
4. **`useRecoilValue(atomOrSelector)`** – A hook that retrieves the current value of an atom or selector without providing a setter function.  
5. **`useSetRecoilState(atomOrSelector)`** – A hook that provides only the setter function to update an atom or selector without reading its value.  
6. **`selector`** – A function that derives computed state from atoms or other selectors, supporting both synchronous and asynchronous operations.  

