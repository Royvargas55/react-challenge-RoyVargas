import { useEffect } from 'react';
import useHighlightElements from './hooks/useHighlightElements';
import { capitalizeFirstLetter } from './utils';

import Input from './components/Input';
import Button from './components/Button';

import { useDispatch, useSelector } from 'react-redux';
import {
  setFirstName,
  setLastName,
  setHighlightedFirstName,
  setHighlightedLastName
} from './store/actions';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, highlightedFirstName, highlightedLastName } = useSelector((state) => state.app);

  const highlightElements = useHighlightElements();

  useEffect(() => {
    dispatch(setHighlightedFirstName(highlightElements('Breaking')));
    dispatch(setHighlightedLastName(highlightElements('Bad')));
  }, []);

  const handleButtonClick = () => {
    dispatch(setHighlightedFirstName(highlightElements(capitalizeFirstLetter(firstName))));
    dispatch(setHighlightedLastName(highlightElements(capitalizeFirstLetter(lastName))));
  };

  return (
    <div className="main">
      <section>
        <div className="container-name">
          <p>{highlightedFirstName}</p>
          <p>{highlightedLastName}</p>
        </div>
        <div className="container-form">
          <div>
            <Input title='Name' value={firstName} onChange={(e) => dispatch(setFirstName(e.target.value))} />
            <Input title='Last Name' value={lastName} onChange={(e) => dispatch(setLastName(e.target.value))} />
          </div>
          <div>
            <Button text='Breakify' onClick={handleButtonClick} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
