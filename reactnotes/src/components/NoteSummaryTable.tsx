import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

const NoteSummaryTable: React.FC = () => {
    const summaryData = useSelector((state: RootState) => state.notes.summaryData);

    return (
        <table>
            <thead>
            <tr>
                <th>Category</th>
                <th>Active</th>
                <th>Archived</th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(summaryData).map((category) => (
                <tr key={category}>
                    <td>{category}</td>
                    <td>{summaryData[category].active}</td>
                    <td>{summaryData[category].archived}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default NoteSummaryTable;
