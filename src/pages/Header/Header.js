import React from 'react';
import { FaAirbnb } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='flex items-center justify-between py-4 border-b-2' style={{paddingRight:'3%',paddingLeft:'3%'}}>
            <div className='flex itmes-center justify-center'>
                <span style={{color:'#FF385C'}} className='text-4xl mr-1'><FaAirbnb/></span>
                <span className='font-bold text-2xl' style={{color:'#FF385C'}}>airbnb</span>
            </div>
            <div className='border-2 px-2 py-1 rounded-full flex items-center hover:shadow-md' style={{marginLeft:'10%'}}>
                <span className='border-r-2 px-3 font-semibold text-md' style={{color:'#222222'}}>Anywhere</span>
                <span className='border-r-2 px-3 font-semibold text-md' style={{color:'#222222'}}>Any week</span>
                <span className='px-4 text-md' style={{color:'#717171'}} >Add guests</span>
                <span className='border-none p-3 rounded-full' style={{backgroundColor:'#FF385C'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "12px", width:"12px",  stroke:"white", strokeWidth: "5.33333", overflow: "visible"}}><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
                </span>
            </div>
            <div className='flex items-center'>
                <span className=' font-semibold' style={{color:'#222222'}}>
                    <span className="hover:border-none hover:rounded-full px-4 py-3 hover:bg-gray-100">
                        Airbnb your home
                    </span>
                </span>
                <span className='mr-1 hover:border-none hover:rounded-full px-4 py-3 hover:bg-gray-100'  style={{color:'#222222'}}> 
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg>
                </span>
                <span className='flex items-center border-2 px-3 py-2 rounded-full hover:shadow-md'>
                    <span className='mr-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block",fill: "none", height:"16px", width: "16px", stroke: "currentcolor", strokeWidth:"3" , overflow: "visible"}}>
                        <g fill="none">
                            <path d="M2 16h28M2 24h28M2 8h28">
                            </path>
                            </g>
                    </svg>
                    </span>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "30px", width: "30px" ,fill: "#6b7280"}}>
                        <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z">
                        </path>
                        </svg>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default Header;