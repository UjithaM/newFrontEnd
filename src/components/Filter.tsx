// import  { useState } from "react";
// import starImage from "../assets/img/Star.png";
// import businessImage from "../assets/img/Business.png";
// import studentImage from "../assets/img/Student Center.png";
// import drawingImage from "../assets/img/Drawing.png";
//
// function Filter() {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [selectedOption, setSelectedOption] = useState(null);
//
//     const nextStep = () => setCurrentStep((prev) => (prev < 4 ? prev + 1 : prev));
//     const prevStep = () => setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
//     const selectOption = (option) => setSelectedOption(option);
//
//     const renderStepContent = () => {
//         switch (currentStep) {
//             case 1:
//                 return <Filter1 selectOption={selectOption} selectedOption={selectedOption} />;
//             case 2:
//                 return <Filter2 selectOption={selectOption} selectedOption={selectedOption} />;
//             case 3:
//                 return <Filter3 selectOption={selectOption} selectedOption={selectedOption} />;
//             case 4:
//                 return <Filter4 selectOption={selectOption} selectedOption={selectedOption} />;
//             default:
//                 return null;
//         }
//     };
//
//     return (
//         <div className="relative flex justify-center items-center  bg-gray-100 z-[99999999999]">
//             <button className="btn" onClick={() => document.getElementById('my_modal').showModal()}>
//                 Open Filter
//             </button>
//             <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
//                 <div className="modal-box">
//                     {renderStepContent()}
//                     <div className="modal-action">
//                         <button
//                             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                             onClick={() => document.getElementById('my_modal').close()}
//                         >
//                             ✕
//                         </button>
//                         {currentStep > 1 && (
//                             <button className="btn" onClick={prevStep}>
//                                 Previous
//                             </button>
//                         )}
//                         {currentStep < 4 && (
//                             <button className="btn" onClick={nextStep}>
//                                 Select fields
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </dialog>
//         </div>
//     );
// }
//
// export default Filter;
//
// function Filter1({ selectOption, selectedOption }) {
//     return (
//         <>
//             <h2 className="text-lg">Tell us, What will you use your</h2>
//             <h3 className="font-bold text-lg">Mobile Phone for?</h3>
//             <div className="space-y-4">
//                 <Option
//                     imageSrc={starImage}
//                     title="Essential"
//                     description="Everyday stuff & entertainment"
//                     isSelected={selectedOption === 'Essential'}
//                     onClick={() => selectOption('Essential')}
//                 />
//                 <Option
//                     imageSrc={businessImage}
//                     title="Work"
//                     description="Powering my profession"
//                     isSelected={selectedOption === 'Work'}
//                     onClick={() => selectOption('Work')}
//                 />
//                 <Option
//                     imageSrc={studentImage}
//                     title="Education"
//                     description="Taking my studies further"
//                     isSelected={selectedOption === 'Education'}
//                     onClick={() => selectOption('Education')}
//                 />
//                 <Option
//                     imageSrc={drawingImage}
//                     title="Creative Hobbies"
//                     description="Making and creating"
//                     isSelected={selectedOption === 'Creative Hobbies'}
//                     onClick={() => selectOption('Creative Hobbies')}
//                 />
//             </div>
//         </>
//     );
// }
//
// function Filter2({ selectOption, selectedOption }) {
//     return (
//         <>
//             <h2 className="text-lg">Tell us more about your preferences</h2>
//             <div className="space-y-4">
//                 <ModalOption
//                     title="Social Media"
//                     isSelected={selectedOption === 'Media'}
//                     onClick={() => selectOption('Media')}
//                 />
//                 <ModalOption
//                     title="Streaming Movies and Music"
//                     isSelected={selectedOption === 'Movies'}
//                     onClick={() => selectOption('Movies')}
//                 />
//                 <ModalOption
//                     title="Gaming"
//                     isSelected={selectedOption === 'Gaming'}
//                     onClick={() => selectOption('Gaming')}
//                 />
//                 <ModalOption
//                     title="Multitasking across the apps"
//                     isSelected={selectedOption === 'Multitasking'}
//                     onClick={() => selectOption('Multitasking')}
//                 />
//                 <ModalOption
//                     title="Photography / Videography"
//                     isSelected={selectedOption === 'Photography'}
//                     onClick={() => selectOption('Photography')}
//                 />
//                 <ModalOption
//                     title="Others"
//                     isSelected={selectedOption === 'Others'}
//                     onClick={() => selectOption('Others')}
//                 />
//             </div>
//         </>
//     );
// }
//
// function Filter3({ selectOption, selectedOption }) {
//     return (
//         <>
//             <h2 className="text-lg">What features are important to you?</h2>
//             <div className="space-y-4">
//                 <ModalOption
//                     title="Camera Quality"
//                     isSelected={selectedOption === 'Camera'}
//                     onClick={() => selectOption('Camera')}
//                 />
//                 <ModalOption
//                     title="Battery Life"
//                     isSelected={selectedOption === 'Battery'}
//                     onClick={() => selectOption('Battery')}
//                 />
//                 <ModalOption
//                     title="Screen Size & Quality"
//                     isSelected={selectedOption === 'Screen'}
//                     onClick={() => selectOption('Screen')}
//                 />
//                 <ModalOption
//                     title="Storage Capacity"
//                     isSelected={selectedOption === 'Storage'}
//                     onClick={() => selectOption('Storage')}
//                 />
//                 <ModalOption
//                     title="Durability"
//                     isSelected={selectedOption === 'Durability'}
//                     onClick={() => selectOption('Durability')}
//                 />
//                 <ModalOption
//                     title="Processing Power"
//                     isSelected={selectedOption === 'Processing'}
//                     onClick={() => selectOption('Processing')}
//                 />
//                 <ModalOption
//                     title="Others"
//                     isSelected={selectedOption === 'Others'}
//                     onClick={() => selectOption('Others')}
//                 />
//             </div>
//         </>
//     );
// }
//
// function Filter4({ selectOption, selectedOption }) {
//     return (
//         <>
//             <h2 className="text-lg">What's your budget?</h2>
//             <div className="space-y-4">
//                 <ModalOption
//                     title="Below Rs. 20,000"
//                     isSelected={selectedOption === '20000'}
//                     onClick={() => selectOption('20000')}
//                 />
//                 <ModalOption
//                     title="Rs. 20,000 - Rs. 75,000"
//                     isSelected={selectedOption === '75000'}
//                     onClick={() => selectOption('75000')}
//                 />
//                 <ModalOption
//                     title="Rs. 75,000 - Rs. 150,000"
//                     isSelected={selectedOption === '150000'}
//                     onClick={() => selectOption('150000')}
//                 />
//                 <ModalOption
//                     title="Rs. 150,000 - Rs. 200,000"
//                     isSelected={selectedOption === '200000'}
//                     onClick={() => selectOption('200000')}
//                 />
//                 <ModalOption
//                     title="Rs. 200,000 - Rs. 300,000"
//                     isSelected={selectedOption === '300000'}
//                     onClick={() => selectOption('300000')}
//                 />
//                 <ModalOption
//                     title="Others"
//                     isSelected={selectedOption === 'Others'}
//                     onClick={() => selectOption('Others')}
//                 />
//             </div>
//         </>
//     );
// }
//
// function ModalOption({ title, isSelected, onClick }) {
//     return (
//         <div
//             onClick={onClick}
//             className={`bg-white p-4 rounded-lg flex items-center space-x-4 shadow-sm cursor-pointer border-2 ${
//                 isSelected ? "border-blue-500" : "border-transparent"
//             }`}
//         >
//             <div className="text-left">
//                 <h2 className="font-bold">{title}</h2>
//             </div>
//         </div>
//     );
// }
//
// function Option({ imageSrc, title, description, isSelected, onClick }) {
//     return (
//         <div
//             onClick={onClick}
//             className={`bg-white p-4 rounded-lg flex items-center space-x-4 shadow-sm cursor-pointer border-2 ${
//                 isSelected ? "border-blue-500" : "border-transparent"
//             }`}
//         >
//             <div className="flex-shrink-0">
//                 <img src={imageSrc} alt={`${title} icon`} className="w-8 h-8" />
//             </div>
//             <div className="text-left">
//                 <h2 className="font-bold">{title}</h2>
//                 <p className="text-sm">{description}</p>
//             </div>
//         </div>
//     );
// }
