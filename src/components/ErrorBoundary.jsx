import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen flex-col items-center justify-center bg-[#060606] text-white">
                    <p className="font-mono text-xs tracking-widest text-white/30 mb-4">ERROR</p>
                    <h1 className="text-3xl font-black mb-3">Something went wrong.</h1>
                    <p className="text-white/40 text-sm mb-8">An unexpected error occurred.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn-primary rounded-full px-6 py-3 text-sm"
                    >
                        Reload page
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}
