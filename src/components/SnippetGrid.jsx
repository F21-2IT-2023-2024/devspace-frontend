function SnippetGrid({ children }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
            {children}
        </div>
    )
}

export default SnippetGrid;