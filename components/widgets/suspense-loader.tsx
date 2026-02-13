import { ReactNode, Suspense } from "react";
import LoadingSpinner from '../widgets/loading-spinner';

export default function SuspenseLoader({ children }: { children: ReactNode }) {
    return <Suspense fallback={<div className='flex justify-center-safe items-center-safe'><LoadingSpinner /></div>}>
        {children}
    </Suspense>
}