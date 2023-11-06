import { Link, router } from '@inertiajs/react';
import Sidebar from '../../Layouts/Sidebar'
import { CreatePatientModal } from './CreateModal';
import { useState } from 'react';

export default function Patients({ patients }) {

    const [selectedItem, setSelectedItem] = useState(null);
    const [searchKey, setSearchKey] = useState("");
    const handleDelete = () => {
        const id = selectedItem.id;
        setSelectedItem("");
        router.delete(`/patients/${id}`);
    }

    const handleSearch = () => {
        const key = searchKey;
        setSearchKey(null);
        router.get(`/patients?search=${key}`)
    }

    console.log(patients)

    return (
        <>
        <CreatePatientModal />
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
                    <div className="flex justify-between">
                        <div className="inline">
                            <div className="pb-4 bg-white dark:bg-gray-900 inline-block">
                                <label htmlFor="table-search" className="sr-only">Search</label>
                                <div className="relative mt-1">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input onChange={e => setSearchKey(e.target.value)} onKeyDown={() => handleSearch() } type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                                </div>
                            </div>
                            <button type="button" onClick={() => handleSearch() } className="ml-1 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Search</button>
                        </div>

                        <div>
                            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Create</button>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-4">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Serial Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Registration Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Sex
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Age
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Treatment Start Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Township
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Vot
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Username
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Password
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { patients.data.map((data, i) => (
                                    <tr key={data.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            { data?.serial_number }
                                        </th>
                                        <td className="px-6 py-4">
                                            { data?.registration_date }
                                        </td>
                                        <td className="px-6 py-4">
                                            { data?.name }
                                        </td>
                                        <td className="px-6 py-4">
                                            { data?.sex }
                                        </td>
                                        <td className="px-6 py-4">
                                            { data?.age }
                                        </td>
                                        <td className="px-6 py-4">
                                            { data?.address }
                                        </td>
                                        <td className="px-6 py-4">
                                            { data?.treatment_start_date }
                                        </td>
                                        <td className="px-6 py-4">
                                            { data?.township }
                                        </td>
                                        <td className="px-6 py-4">
                                        { data?.vot }
                                        </td>
                                        <td className="px-6 py-4">
                                            { data?.username }
                                        </td>
                                        <td className="px-6 py-4">
                                            { data?.password }
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2">Edit</a>
                                            {/* <a href="" onClick={() => handleDelete(data?.id)} data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</a> */}
                                            <a onClick={() => setSelectedItem(data)} data-modal-target="delete-modal" data-modal-toggle="delete-modal" className="font-medium text-red-600 dark:text-blue-500 hover:underline cursor-pointer">Delete</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div id="delete-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative w-full max-w-md max-h-full">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="delete-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="p-6 text-center">
                                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                        <button onClick={() => handleDelete()} data-modal-hide="delete-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                            Yes, I'm sure
                                        </button>
                                        <button data-modal-hide="delete-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <nav className="flex items-center justify-between pt-4 px-2" aria-label="Table navigation">
                            {patients?.links && (
                                <ul className="inline-flex -space-x-px text-sm h-8">

                                    {patients?.links.map((page) => (
                                        <li key={page.url}>
                                            <Link
                                                href={page.url}
                                                className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white ${page.active ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                                                {page.label === '&laquo; Previous' && '←'}
                                                {page.label === 'Next &raquo;' && '→'}
                                                {page.label !== '&laquo; Previous' && page.label !== 'Next &raquo;' && page.label}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
