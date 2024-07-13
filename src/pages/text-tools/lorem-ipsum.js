import BackTo from '../../components/atoms/BackTo';

function LoremIpsum () {
  return (
    <main className="CrispTool">
      <BackTo to="/text-tools">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L2.41421 5.58579C1.63317 6.36683 1.63316 7.63316 2.41421 8.41421L7 13" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <p>Back to Text Tools</p>
      </BackTo>
      <section className="ToolPanel">
        <h1>Lorem Ipsum Generator</h1>
      </section>
    </main>
  )
}

export default LoremIpsum;