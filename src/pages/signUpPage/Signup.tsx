import React, {useState} from "react";

interface RadioButtonsProps {
    onChange: (option: string) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({onChange}) => {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <label style={{marginRight: '50px'}}>
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                    style={{marginRight: '12px'}}
                />
                Personal
            </label>
            <label>
                <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                    style={{marginRight: '12px'}}
                />
                Business
            </label>
        </div>

    );
};

interface CardProps {
    selectedOption: string;
}

const Card: React.FC<CardProps> = ({selectedOption}) => {

    return (
        <div className="container">
            <div className="card-body">
                {selectedOption === "option1" && (
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control w-full p-2 rounded-lg pl-4"
                                    id="firstName"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control w-full p-2 rounded-lg pl-4"
                                    id="lastName"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div className="form-group mt-4">
                            <input
                                type="text"
                                className="form-control w-full p-2 rounded-lg pl-4"
                                id="email"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-4">
                            <input
                                type="password"
                                className="form-control w-full p-2 rounded-lg pl-4"
                                id="password"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="form-group mt-4">
                            <input
                                type="password"
                                className="form-control w-full p-2 rounded-lg pl-4"
                                id="confirmPassword"
                                placeholder="Confirm password"
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary w-full mt-6 mb-4 p-2 bg-blue-500 text-white rounded-lg"
                        >
                            Create a personal account
                        </button>
                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-gray-400" />
                            <span className="mx-4 text-gray-600">or</span>
                            <hr className="flex-grow border-gray-400" />
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button
                                type="button"
                                className="btn btn-outline-secondary flex items-center justify-center w-14 h-14"
                            >
                                <img
                                    src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                                    alt="google"
                                    className="w-10 h-8"
                                />
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary flex items-center justify-center w-14 h-14"
                            >
                                <img
                                    src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
                                    alt="apple"
                                    className="w-10 h-8"
                                />
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary flex items-center justify-center w-14 h-14"
                            >
                                <img
                                    src="https://img.icons8.com/?size=100&id=106163&format=png&color=1877F2"
                                    alt="facebook"
                                    className="w-10 h-8"
                                />
                            </button>
                        </div>
                    </form>
                )}
                {selectedOption === "option2" && (
                    <form>
                        <div className="form-group mt-4">
                            <input
                                type="text"
                                className="form-control w-full p-2 rounded-lg pl-4"
                                id="businessName"
                                placeholder="Business Name"
                            />
                        </div>
                        <div className="form-group mt-4">
                            <input
                                type="text"
                                className="form-control w-full p-2 rounded-lg pl-4"
                                id="email"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-4">
                            <input
                                type="password"
                                className="form-control w-full p-2 rounded-lg pl-4"
                                id="password"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="form-group mt-4">
                            <input
                                type="password"
                                className="form-control w-full p-2 rounded-lg pl-4"
                                id="confirmPassword"
                                placeholder="Confirm password"
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary w-full mt-6 mb-4 p-2 bg-blue-500 text-white rounded-lg"
                        >
                            Create a business account
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

const Signup: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="rounded w-full max-w-md">
                    <h1 className="text-center text-4xl font-bold font-rajdhani">Create an account</h1>
                    <div className="text-center my-4">
                        <span className="mr-2">Already have an account?</span>
                        <a href="/" className="text-blue-500">Sign in</a>
                    </div>
                    <RadioButtons onChange={handleOptionChange} />
                    <div className="mt-6">
                        <Card selectedOption={selectedOption} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
