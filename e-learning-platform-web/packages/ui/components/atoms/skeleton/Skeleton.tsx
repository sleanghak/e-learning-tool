

interface Props {

};


export function Skeleton({ }: Props) {
    return (

        <div role="status" className="max-w-sm animate-pulse md:p-6 dark:border-gray-700">
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div>
                <div className="flex justify-between ... mb-4">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-24" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-24" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-24" />
                </div>
            </div>
            <div className="mb-4 flex justify-between ...">
                <div className="w-40 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                <div className="w-40 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
            </div>
            <span className="sr-only">Loading...</span>
        </div>

    );
};