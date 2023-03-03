export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: '1px solid lightgrey', padding: '12px' }}>
      <h1>Layout (/client-component/[...parameters])</h1>
      {children}
    </div>
  );
}
