import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

const NoteSummaryTable: React.FC = () => {
    const summaryData = useSelector((state: RootState) => state.notes.summaryData);

    return (
        <table className="table-auto border-collapse border border-slate-400">
            <thead>
            <tr className="bg-teal-300 text-white text-center h-10">
                <th className="border border-slate-300 w-40">Category</th>
                <th className="border border-slate-300 w-40">Active</th>
                <th className="border border-slate-300 w-40">Archived</th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(summaryData).map((category) => (
                <tr key={category} className="hover:bg-teal-50 h-10">
                    <td className="border border-slate-300 p-2">{category}</td>
                    <td className="border border-slate-300 p-2">{summaryData[category].active}</td>
                    <td className="border border-slate-300 p-2">{summaryData[category].archived}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default NoteSummaryTable;
