import { photo,react,tw,html,css,git,vercel,sushi,nike, bank } from "./assets/images";
// C:\Users\JIAMSHEER\Desktop\ashwin\src\App.jsx
// C:\Users\JIAMSHEER\Desktop\ashwin\src\assets\images\photo.jpgpy-40 pl-10
const App = () => (
  <main className="relative">
    <div className="flex">
    <div className=" w-1/5 bg-cyan-400 h-auto text-black text-center items-center font-bold ">
       <p className="mt-60 mr-3 fixed ">
        <h1 className="text-[30px] ml-7">Ashwin Kumar A</h1>
        <p className="ml-7 " >ashwinkumarkolar@gmail.com</p>
        <p className="ml-7">8217081475</p>
        </p>
          </div>
          <div className="w-4/5">
            <div className=" h-20 w-full bg-cyan-400 fixed  ">
            <ul className="flex justify-end gap-10 mr-10 font-bold mr-80">
              <li className=" mt-7"><a href="#section A">About me </a></li>
              <li className=" mt-7"><a href="#section B">Technical skills </a></li>
              <li className=" mt-7"><a href="#section C">Projects </a></li>
            </ul>
            </div>
          <p >
        <h1 className="text-[30px] text-center mt-20 font-semibold font-poppins"  id="section A" > About Me </h1>
        <p className="mt-20 text-center" >
          <div className="flex justify-center items-center">
          <img src={photo}
              alt='logo'
              width={200}
              height={46}
              />
        </div>
        <p className="mt-20">
        As a recent graduate with a Bachelor's degree and a passion for creating visually appealing and user-friendly websites,<br /> I am eager to kick-start my career as a Frontend Developer. I have a strong foundation in HTML, CSS, and JavaScript,<br /> and I'm excited to apply my skills to build responsive and intuitive web applications. During my academic journey,<br/>  I had the opportunity to work on various projects,where I honed my problem-solving abilities and attention to detail.<br/>  I'm eager to collaborate with experienced professionals, learn, and contribute to innovative web development projects.<br/>  My goal is to create exceptional user experiences through clean and efficient code while staying up-to-date with the latest<br/>  frontend technologies."
        </p>
        </p>
        </p>
        <div className="flex justify-center items-center mt-20 ">
          <p>
            <h3 className="text-[30px] font-semibold font-poppins" id="section B">
           Technical skills
           </h3>
           </p>
        </div>
        <div className="flex justify-center  space-x-48">
        <div >
              <img src={html} alt="html" width={200} height={40} className="mt-20"/>
              <p className="flex justify-center items-center">HTML</p>
           </div>
           <div >
              <img src={css} alt="html" width={200} height={40} className="mt-20"/>
              <p className="flex justify-center items-center">CSS</p>
           </div> 
           <div >
              <img src={react} alt="html" width={200} height={40} className="mt-20"/>
              <p className="flex justify-center items-center">React</p>
           </div> 
           </div> 
           <div className="flex justify-center  space-x-48">
           <div>
              <img src={tw} alt="html" width={200} height={40} className="mt-20"/>
              <p className="flex justify-center items-center mt-8">Tailwind</p>
           </div>
           <div>
              <img src={git} alt="html" width={200} height={40} className="mt-10"/>
              <p className="flex justify-center items-center mt-19">GitHub</p>
           </div> 
           <div>
              <img src={vercel} alt="html" width={200} height={40} className="mt-20"/>
              <p className="flex justify-center items-center ">Vercel</p>
           </div>  
           </div> 
           <div className="flex justify-center items-center mt-20" >
          <p >
            <h3 className="text-[30px] font-semibold font-poppins"  id="section C">
           Projects
           </h3> 
           </p>
        </div> 
        <div className="flex mt-20 ml-20" >
          <p>
           <h3 className="text-[30px] underline decoration-solid decoration-sky-500 underline-offset-4">1. Nike Website using Tailwind CSS</h3>
           <p>
             <img src={nike} alt="nike" className=" cursor-pointer border-1 border-black mt-10"/>
           </p>
           < p className="mt-10">GitHub link : <a href="https://github.com/Ashwin-cool/Nike.git" className="text-blue-600">https://github.com/Ashwin-cool/Nike.git</a></p>
           < p >Vercel link : <a href="https://nike-5zobjcswr-ashwin-kumar-as-projects.vercel.app/" className="text-blue-600">https://nike-5zobjcswr-ashwin-kumar-as-projects.vercel.app/</a></p>
           </p>
           </div>
           <div className="flex mt-20 ml-20">
          <p>
           <h3 className="text-[30px] underline decoration-solid decoration-sky-500 underline-offset-4">2. HooBank in React JS using Tailwind</h3>
           <p>
             <img src={bank} alt="bank" className=" cursor-pointer border-1 border-black mt-10"/>
           </p>
           < p className="mt-10">GitHub link : <a href="https://github.com/Ashwin-cool/Hoobank.git" className="text-blue-600">https://github.com/Ashwin-cool/Hoobank.git</a></p>
           < p >Vercel link : <a href="https://bank-app-ruby.vercel.app/" className="text-blue-600">https://bank-app-ruby.vercel.app/</a></p>
           </p>
           </div>
           <div className="flex mt-20 ml-20">
          <p>
           <h3 className="text-[30px] underline decoration-solid decoration-sky-500 underline-offset-4">3. Sushi theamed website using HTML and CSS</h3>
           <p>
             <img src={sushi} alt="sushi" className=" cursor-pointer border-1 border-black mt-10"/>
           </p>
           < p className="mt-10">GitHub link : <a href="https://github.com/Ashwin-cool/sushiman.git" className="text-blue-600">https://github.com/Ashwin-cool/sushiman.git</a></p>
           < p >Vercel link : <a href="https://sushi-eosin.vercel.app/" className="text-blue-600">https://sushi-eosin.vercel.app/</a></p>
           </p>
           </div>
           <div className="flex justify-center item-center mt-20">
           <button className=" bg-cyan-400 hover: bg-cyan-500 text-white font-bold py-2 px-4 rounded">Download Resume</button>

 
           </div>
    </div>      

    </div>
    
    
  </main>
);

export default App;