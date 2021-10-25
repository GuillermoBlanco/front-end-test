import { render, screen } from '@testing-library/react';
import List from './List';

const freshList = ['The fast', 'The slow', 'The smooth'];

test('renders a Share-now list if shares are provided by props', () => {
  render(<List shares={[{id: 'This is a share-now element'}]}/>);
  const linkElement = screen.getByText(/This is a share-now element/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a Share-now list with all their information if shares are provided by props', () => {
  render(<List shares={[{id: 'This is a share-now element', otherProp: "That shows more information"}]}/>);  
  expect(screen.getByText(/This is a share-now element/i)).toBeInTheDocument();
  expect(screen.getByText(/That shows more information/i)).toBeInTheDocument();
});

test('renders a Share-now list if multiple shares are provided by props', () => {
  render(<List shares={freshList.map((free)=> ({id: free}))}/>);

  freshList.forEach((free)=> {
    expect(screen.getByText(new RegExp(free))).toBeInTheDocument();
  });
});

test('NOT renders a Share-now list if multiple shares and isFreeView are provided by props', () => {
  render(<List shares={freshList.map((free)=> ({id: free}))} isFreeView/>);

  freshList.forEach((free)=> {
    expect(screen.queryByText(new RegExp(free, 'i'))).not.toBeInTheDocument();
  });
});

test('renders a Free-now list if frees and isFreeView are provided by props', () => {
  render(<List frees={freshList.map((free)=> ({id: free}))} isFreeView/>);

  freshList.forEach((free)=> {
    expect(screen.getByText(new RegExp(free))).toBeInTheDocument();
  });
});

test('renders a Free-now list with all their information if frees and isFreeView are provided by props', () => {
  render(<List frees={[{id: 'This is a free-now element', otherProp: "That shows more information"}]} isFreeView/>);  
  expect(screen.getByText(/This is a free-now element/i)).toBeInTheDocument();
  expect(screen.getByText(/That shows more information/i)).toBeInTheDocument();
});

test('NOT renders a Free-now list if frees are provided by props but not isFreeView', () => {
  render(<List frees={freshList.map((free)=> ({id: free}))}/>);

  freshList.forEach((free)=> {
    expect(screen.queryByText(new RegExp(free))).not.toBeInTheDocument();
  });
});

test('renders any Free-now information coming as props but coordinate prop if frees and isFreeView are provided by props', () => {
  render(<List frees={[{id: 'This is a free-now element with coordinates props', coordinate: "Coordinates are not shown for frees"}]} isFreeView/>);  
  expect(screen.getByText(/This is a free-now element with coordinates props/i)).toBeInTheDocument();
  expect(screen.queryByText(/Coordinates are not shown for frees/i)).not.toBeInTheDocument();
});
