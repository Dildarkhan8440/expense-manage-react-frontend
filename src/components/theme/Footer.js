export default function Footer(){
    return(
        
         <footer className="bg-primary text-center text-white">
         {/* <!-- Grid container --> */}
         <div className="container p-4 pb-0">
           {/* <!-- Section: Social media --> */}
           <section className="mb-4">
             {/* <!-- Facebook --> */}
             <a
               data-mdb-ripple-init
               className="btn btn-outline-primary btn-floating m-1 border border-white"
               href="#!"
               role="button"
             >
               <i className="fab fa-facebook-f text-white"></i>
             </a>

             {/* <!-- Twitter --> */}
             <a
               data-mdb-ripple-init
               className="btn btn-outline-primary btn-floating m-1 border border-white"
               href="#!"
               role="button"
             >
               <i className="fab fa-twitter text-white"></i>
             </a>

             {/* <!-- Google --> */}
             <a
               data-mdb-ripple-init
               className="btn btn-outline-primary btn-floating m-1 border border-white"
               href="#!"
               role="button"
             >
               <i className="fab fa-google text-white"></i>
             </a>

             {/* <!-- Instagram --> */}
             <a
               data-mdb-ripple-init
               className="btn btn-outline-primary btn-floating m-1 border border-white"
               href="#!"
               role="button"
             >
               <i className="fab fa-instagram text-white"></i>
             </a>

             {/* <!-- Linkedin --> */}
             <a
               data-mdb-ripple-init
               className="btn btn-outline-primary btn-floating m-1 border border-white"
               href="#!"
               role="button"
             >
               <i className="fab fa-linkedin-in text-white"></i>
             </a>

             {/* <!-- Github --> */}
             <a
               data-mdb-ripple-init
               className="btn btn-outline-primary btn-floating m-1 border border-white"
               href="#!"
               role="button"
             >
               <i className="fab fa-github text-white"></i>
             </a>
           </section>
           {/* <!-- Section: Social media --> */}
         </div>
         {/* <!-- Grid container --> */}

         {/* <!-- Copyright --> */}
         <div
           className="text-center p-3"
           style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
         >
           © 2020 Copyright:
           <a className="text-white" href="https://mdbootstrap.com/">
             MDBootstrap.com
           </a>
         </div>
         {/* <!-- Copyright --> */}
       </footer>
     
    )
}