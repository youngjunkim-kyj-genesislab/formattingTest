import logo from './logo.svg';
import './App.css';

function App() {
  const TestFunc = () => {
    console.log('????????TEST');
    console.log('????????TEST');
    return '수정바랍니다.';
  };

  const list = [1, 2, 3, 4, 5];
  const foo = () => {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
    console.log('커밋되나 테스트');
    const te = '?';
    const YJBRANCH = '영준브랜치';
    return list.map((item, idx) => <div>{item}</div>);
  };

  const test2 = '111';

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
