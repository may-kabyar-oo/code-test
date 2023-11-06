import { useForm } from "@inertiajs/react";
import React from "react";

export const CreatePatientModal = () => {

    const { data, setData, post } = useForm({
        name: "",
        sex: "Male",
        age: null,
        address: "",
        treatment_start_date: "",
        township: "",
        vot: false,
        password: ""
    });

    // function handleChange(e) {
    //     const key = e.target.id;
    //     const value = e.target.value
    //     setValues(values => ({
    //         ...values,
    //         [key]: value,
    //     }))
    // }

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post('/patients', data);
    }

    return (
        <>
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Patient Registration</h3>
                            <form className="space-y-6" onSubmit={submit}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" name="name" id="name" value={data.name} onChange={e => setData(`name`, e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sex</label>
                                    <div className="flex">
                                        <div className="flex items-center mr-4">
                                            <input
                                                checked={data.sex === "Male"}
                                                id="inline-radio1"
                                                type="radio"
                                                value="Male"
                                                name="sex-radio-group"
                                                onChange={e => setData("sex", e.target.value)}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inline-radio1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input
                                                checked={data.sex === "Female"}
                                                id="inline-radio2"
                                                type="radio"
                                                value="Female"
                                                name="sex-radio-group"
                                                onChange={e => setData("sex", e.target.value)}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inline-radio2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                    <input type="number" id="age" value={data.age} onChange={e => setData(`age`, e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                </div>

                                <div>
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                    <textarea id="address" rows="4" onChange={e => setData(`address`, e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.address} required></textarea>
                                </div>

                                <div className="relative max-w-sm">
                                    <label htmlFor="treatment-start-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Treatment Start Date</label>
                                    <input id="treatment-start-date" datepicker type="date" value={data.treatment_start_date} onChange={e => setData(`treatment_start_date`, e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" required />
                                </div>

                                <div>
                                    <label htmlFor="township" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                    <select
                                        id="township"
                                        value={data.township}
                                        onChange={e => setData("township", e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Choose a township</option>
                                        <option value="AMP">AMP</option>
                                        <option value="AMT">AMT</option>
                                        <option value="CAT">CAT</option>
                                        <option value="CMT">CMT</option>
                                        <option value="PTG">PTG</option>
                                        <option value="PGT">PGT</option>
                                        <option value="MHA">MHA</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">VOT</label>
                                    <div className="flex">
                                        <div className="flex items-center mr-4">
                                            <input
                                                checked={data.vot === true}
                                                id="inline-radio1"
                                                type="radio"
                                                value=""
                                                name="vot-radio-group"
                                                onChange={() => setData("vot", true)}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inline-radio1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input
                                                checked={data.vot === false}
                                                id="inline-radio2"
                                                type="radio"
                                                value=""
                                                name="vot-radio-group"
                                                onChange={() => setData("vot", false)}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inline-radio2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" value={data.password} onChange={e => setData(`password`, e.target.value)} placeholder="••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-modal-hide="authentication-modal">Create New Patient</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
