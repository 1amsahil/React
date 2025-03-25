
export default function LoadingSpinner() {
  return <div className="loading-spinner" >

        <div className="spinner spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>

        <div className="spinner spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>

        <div className="spinner spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>

        <div className="spinner spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>

    </div>
}
