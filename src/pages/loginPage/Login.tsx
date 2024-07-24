function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-96 h-88 rounded-md">
                <div className="card-body p-5">
                    <h1 className="text-center text-4xl font-bold font-rajdhani">Welcome!</h1>
                    <br />
                    <div className="flex justify-center items-center mb-8">
                        <p className="text-sm text-center">Join our company or  <a href="/signUp" className="text-blue-500">Create a new account</a></p>
                    </div>
                    <form>
                        <div className="form-group mb-5">
                            <input
                                type="text"
                                className="form-control w-full p-2 rounded-lg pl-4"
                                id="usernameEmail"
                                placeholder="Enter username or email"
                            />
                        </div>
                        <div className="form-group mb-5">
                            <input
                                type="password"
                                className="form-control w-full p-2 rounded-lg pl-4"
                                id="password"
                                placeholder="Enter password"
                            />
                        </div>
                        <a href="/landin">
                            <button type="button" className="btn btn-primary w-full mb-4 p-2 bg-blue-500 text-white rounded-lg">Login</button>
                        </a>
                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-gray-400" />
                            <span className="mx-4 text-gray-600">or</span>
                            <hr className="flex-grow border-gray-400" />
                        </div>
                        <button type="button" className="btn btn-outline-secondary w-full mb-2 p-2 border border-gray-300 bg-white rounded-xl flex items-center justify-center">
                            <img className="w-8 h-8 mr-2" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google" />
                            <i className="fab fa-google"></i> Continue with Google
                        </button>
                        <button type="button" className="btn btn-outline-secondary w-full mb-2 p-2 border border-gray-300 bg-white rounded-xl flex items-center justify-center">
                            <img className="w-8 h-8 mr-2" src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" alt="apple" />
                            <i className="fab fa-apple"></i> Continue with Apple
                        </button>
                        <button type="button" className="btn btn-outline-secondary w-full p-2 border border-gray-300 bg-white rounded-xl flex items-center justify-center">
                            <img className="w-8 h-8 mr-2" src="https://img.icons8.com/?size=100&id=106163&format=png&color=1877F2" alt="facebook" />
                            <i className="fab fa-facebook"></i> Continue with Facebook
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
