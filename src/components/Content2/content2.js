import './content2.css';
import doc1 from'../../assets/Images/Angela.webp'
import doc2 from'../../assets/Images/billgates.webp'
import doc3 from'../../assets/Images/KunalShah.webp'
import doc4 from'../../assets/Images/Michael.webp'
import doc5 from'../../assets/Images/Satya.webp'
import { useEffect } from 'react';
import { addEvents } from './script';

const Content2 = () => {
    useEffect(() => {
        addEvents()
    },[])
  return (
    <div className='body4'>
        <div className='wrapper' >
            <i id='left' class="fa fa-fw fa-angle-left" aria-hidden="true"></i>
           
            <ul className='carousel'  >
                <li className='card'>
                    <div className='img'>
                       <img src={doc1} alt='img'/ ></div>
                        <h2>Angela Merkel</h2>
                        <h5>Former Chancellor of Germany</h5>
                        <span>"India's commitment to digital infrastructure and innovation is impressive. The government's initiatives to promote digital literacy and entrepreneurship are paving the way for a more inclusive and connected society."</span>
                </li>

                <li className='card'>
                    <div className='img'>
                        <img src={doc2} alt='img'/ ></div>
                        <h2>Bill Gates</h2>
                        <h5>Co-Founder of Microsoft & Co-Chair Bill and Melinda Gates Foundation</h5>
                        <span>"No country has built a more comprehensive digital infrastructure than India"</span>
                </li>

                <li className='card'>
                    <div className='img'>
                        <img src={doc4} alt='img'/></div>
                        <h2>Michael Spence</h2>
                        <h5>Nobel Laureate</h5>
                        <span>"India has the best digital economy & finance architecture in the world."</span>
                </li>

                <li className='card'>
                    <div className='img'>
                        <img src={doc3} alt='img'/></div>
                        <h2>Kunal Shah</h2>
                        <h5>Founder of CRED</h5>
                        <span>"UPI has unlocked new possibilities for innovation in the fintech space. Its open architecture has allowed startups to build innovative products and services on top of the existing infrastructure."</span>
                </li>

                <li className='card'>
                    <div className='img'>
                       <img src={doc5} alt='img'/></div>
                        <h2>Satya Nadella
</h2>
<h5>Microsoft Chairman & CEO
</h5>
                        <span>"India is leading the world with digital public goods and solutions"

</span>
                </li>

                
            </ul>
            <i class="fa fa-fw fa-angle-right" aria-hidden="true"></i>
            
        </div>  
    </div>

  )
} 


export default Content2