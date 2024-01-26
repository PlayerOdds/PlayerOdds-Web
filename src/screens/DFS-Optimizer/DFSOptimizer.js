import React from 'react';

const Table = () => {
    return (
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Column 1
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Column 2
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Column 3
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Column 4
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">
                            Data 1
                        </td>
                        <td className="py-4 px-6">
                            Data 2
                        </td>
                        <td className="py-4 px-6">
                            Data 3
                        </td>
                        <td className="py-4 px-6">
                            Data 4
                        </td>
                    </tr>
                    {/* More rows */}
                </tbody>
            </table>
        </div>
    );
};

export default Table;