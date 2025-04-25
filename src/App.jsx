import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateAsset } from './redux/assetSlice';
import AssetTable from './components/AssetTable';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const simulateUpdates = () => {
      const randomId = Math.floor(Math.random() * 3) + 1;

      const randomPrice = (Math.random() * 50000 + 1000).toFixed(2); // $1000 - $51000
      const randomChange = (Math.random() * 20 - 10).toFixed(2);     // -10% to +10%
      const randomVolume = Math.floor(Math.random() * 100000);       // 0 - 100,000

      dispatch(updateAsset({
        id: randomId,
        price: parseFloat(randomPrice),
        change: parseFloat(randomChange),
        volume: randomVolume,
      }));
    };

    const interval = setInterval(simulateUpdates, 1500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [dispatch]);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', background: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#222',
        fontSize: '2rem'
      }}>
        Real-Time Asset Tracker
      </h1>
      <AssetTable />
    </main>
  );
};

export default App;