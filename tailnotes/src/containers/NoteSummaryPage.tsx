import React from 'react';
import NoteSummaryTable from '../components/NoteSummaryTable';

const NoteSummaryPage: React.FC = () => {
    return (
        <div>
            <h2 className="text-lg font-bold my-3">Summary</h2>
            <NoteSummaryTable />
        </div>
    );
};

export default NoteSummaryPage;
