import React from 'react'

const Footer = () => {
  return (
    <div>
  <footer className='fotrbckclr mt-5'>
         <div className='container '>
             <div className='row'>
                 <div className='col-sm-3'>
                     <h4>infetech</h4>
                     <p>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                     <i class="bi bi-facebook"></i>
                     <i class="bi bi-instagram"></i>
                     <i class="bi bi-twitter"></i>
                     <i class="bi bi-pinterest"></i>
                 </div>
                 <div className='col-sm-3 fotrli'>
                     <h4 className='footerlink'>Links</h4>
                     <ul>
                         <li >About</li>
                         <li>Meet our Team</li>
                         <li>News & Media</li>
                         <li>Our Projects</li>
                         <li>Contact</li>
                     </ul>
                 </div>
                 <div className='col-sm-3'>
                     <h4>News Letter</h4>
                     <p>Signup for our latest news & articles. We won’t give you spam mails.</p>
                     <input type='email' placeholder='Enter your Email'/>
                     <p>I agree to all terms and policies of the company</p>
                 </div>
                 <div className='col-sm-3 fotrli'>
                     <h4 className='footercontact'>Contact</h4>
                     <ul>
                         <li><i class="fas fa-phone-volume"></i> + 88 ( 9800 ) 6802</li>
                         <li> <i class="fas fa-envelope"></i> needhelp@company.com</li>
                         <li><i class="fas fa-map-marker-alt"></i> 88 Broklyn Golden Road <span className='ftrspn'>Street New York. USA</span></li>
                     </ul>
                 </div>
             </div>
         </div>
      </footer>
    </div>
  )
}

export default Footer