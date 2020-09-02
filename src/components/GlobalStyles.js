import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
	margin: 0;
	border: 0;
}

:root {
  --light-teal: #84C0B7;
  --medium-teal: #205F59;
  --black-coral: #465362;
  --morning-blue: #839788;
  --light-copper: #FFFBF6;
  --persian-plum: #6B0F1A;

  --font-sans-serif: 'Libre Franklin', sans-serif;
  --font-serif: 'Roboto Slab', serif;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-sans-serif);
  color: var(--black-coral);
  background: var(--light-copper);
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  font-family: var(--font-serif);
}

h2 {
  font-size: 1.4rem;
  font-family: var(--font-serif);
}

h3 {
  font-size: 1.2rem;
  font-family: var(--font-serif);
}

button {
color: white;
background: var(--medium-teal);
padding: 5px;
border-radius: 4px;
box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);

:active {
  transform: scale(0.95, 0.95);
  opacity: 0.8;
}

:focus {
  outline: none;
}
}

input {
  font-family: var(--font-sans-serif);
  padding: 5px;
  border-radius: 4px;
  border: 1px solid var(--morning-blue);

  :focus {
  outline: none;
  box-shadow: inset 0 0 2px var(--medium-teal);
}
}

ul {
  list-style: none;
}
`;
