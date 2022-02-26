import ReactDOM from "react-dom"
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

function TemText(){
    return(
    <div>
        <Header />
        <Body   />
        <Footer />
    </div>
    )
}

// document.getElementById('root').append(sample)
ReactDOM.render(<TemText/>,document.getElementById('rootr'))
