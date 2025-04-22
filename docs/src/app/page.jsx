import './global.css';

export default function IndexPage() {
  return (
    <h1
      style={{
        fontSize: 64,
        fontWeight: 'bold',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1 className="text-red-500 dark:text-blue-500">home page</h1>
      </div>
    </h1>
  );
}
