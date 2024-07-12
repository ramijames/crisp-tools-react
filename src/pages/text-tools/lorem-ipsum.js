import { Link } from 'react-router-dom';

function LoremIpsum () {
  return (
    <div>
      <Link to="/text-tools" className="backButton">Back to Text Tools</Link>
      <h1>Lorem Ipsum Generator</h1>
    </div>
  )
}

export default LoremIpsum;