import React, { useState, useEffect } from "react";
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CryptoTable = () => {
  const [assets, setAssets] = useState([
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      iconColor: "#F7931A",
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume: 43874950947,
      volumeSymbol: "46,781K BTC",
      circulatingSupply: "19.85M BTC",
      sparklineData: [58000, 59000, 60000, 59500, 61000, 65000, 70000, 75000, 80000, 85000, 93759],
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      iconColor: "#627EEA",
      price: 1802.46,
      change1h: 0.60,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume: 23547469307,
      volumeSymbol: "13.05M ETH",
      circulatingSupply: "120.71M ETH",
      sparklineData: [1650, 1680, 1670, 1690, 1720, 1750, 1770, 1790, 1800, 1802],
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      iconColor: "#26A17B",
      price: 1.00,
      change1h: 0.00,
      change24h: 0.00,
      change7d: 0.04,
      marketCap: 145320022085,
      volume: 92268882007,
      volumeSymbol: "92.25B USDT",
      circulatingSupply: "145.27B USDT",
      sparklineData: [1.000, 0.999, 1.001, 1.000, 0.999, 1.001, 1.000, 1.000, 1.001, 1.000],
    },
    {
      id: 4,
      name: "XRP",
      symbol: "XRP",
      iconColor: "#23292F",
      price: 2.22,
      change1h: 0.46,
      change24h: 0.54,
      change7d: 6.18,
      marketCap: 130073814966,
      volume: 5131481491,
      volumeSymbol: "2.30B XRP",
      circulatingSupply: "58.39B XRP",
      sparklineData: [2.00, 2.02, 2.05, 2.04, 2.08, 2.10, 2.15, 2.18, 2.20, 2.22],
    },
    {
      id: 5,
      name: "BNB",
      symbol: "BNB",
      iconColor: "#F3BA2F",
      price: 606.65,
      change1h: 0.09,
      change24h: -1.20,
      change7d: 3.73,
      marketCap: 85471956947,
      volume: 1874281784,
      volumeSymbol: "3.08M BNB",
      circulatingSupply: "140.89M BNB",
      sparklineData: [580, 585, 590, 595, 600, 592, 598, 602, 605, 606.65],
    },
    {
      id: 6,
      name: "Solana",
      symbol: "SOL",
      iconColor: "#00FFA3",
      price: 151.51,
      change1h: 0.53,
      change24h: 1.26,
      change7d: 14.74,
      marketCap: 78381958631,
      volume: 4881674486,
      volumeSymbol: "32.25M SOL",
      circulatingSupply: "517.31M SOL",
      sparklineData: [130, 135, 138, 142, 145, 147, 148, 150, 151, 151.51],
    },
    {
      id: 7,
      name: "Cardano",
      symbol: "ADA",
      iconColor: "#3CC8D4",
      price: 1.00,
      change1h: 0.01,
      change24h: -0.01,
      change7d: 0.02,
      marketCap: 25689741236,
      volume: 4121563874,
      volumeSymbol: "4.12B USDC",
      circulatingSupply: "25.69B USDC",
      sparklineData: [1.000, 1.000, 0.999, 1.001, 1.000, 0.999, 1.000, 1.000, 1.001, 1.000],
    },
    {
      id: 8,
      name: "Cardano",
      symbol: "ADA",
      iconColor: "#2775CA",
      price: 1.00,
      change1h: 0.01,
      change24h: -0.01,
      change7d: 0.02,
      marketCap: 25689741236,
      volume: 4121563874,
      volumeSymbol: "4.12B USDC",
      circulatingSupply: "25.69B USDC",
      sparklineData: [1.000, 1.000, 0.999, 1.001, 1.000, 0.999, 1.000, 1.000, 1.001, 1.000],
    },
    {
      id: 9,
      name: "USDC",
      symbol: "USDC",
      iconColor: "#2775CA",
      price: 1.00,
      change1h: 0.01,
      change24h: -0.01,
      change7d: 0.02,
      marketCap: 25689741236,
      volume: 4121563874,
      volumeSymbol: "4.12B USDC",
      circulatingSupply: "25.69B USDC",
      sparklineData: [1.000, 1.000, 0.999, 1.001, 1.000, 0.999, 1.000, 1.000, 1.001, 1.000],
    },
    {
      id: 10,
      name: "USDC",
      symbol: "USDC",
      iconColor: "#2775CA",
      price: 1.00,
      change1h: 0.01,
      change24h: -0.01,
      change7d: 0.02,
      marketCap: 25689741236,
      volume: 4121563874,
      volumeSymbol: "4.12B USDC",
      circulatingSupply: "25.69B USDC",
      sparklineData: [1.000, 1.000, 0.999, 1.001, 1.000, 0.999, 1.000, 1.000, 1.001, 1.000],
    }
  ]);
  
  const [favorites, setFavorites] = useState([]);

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prevAssets => 
        prevAssets.map(asset => {
          const priceChange = asset.price * (Math.random() * 0.002 - 0.001);
          const newPrice = asset.price + priceChange;
          
          // Update hourly change slightly
          const change1h = asset.change1h + (Math.random() * 0.04 - 0.02);
          
          return {
            ...asset,
            price: newPrice,
            change1h,
          };
        })
      );
    }, 1000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const formatPrice = (price) => {
    if (price >= 1000) {
      return '$' + price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else {
      return '$' + price.toFixed(2);
    }
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000000000) {
      return '$' + (num / 1000000000000).toFixed(2) + 'T';
    }
    if (num >= 1000000000) {
      return '$' + (num / 1000000000).toFixed(2) + 'B';
    }
    if (num >= 1000000) {
      return '$' + (num / 1000000).toFixed(2) + 'M';
    }
    return '$' + num.toLocaleString();
  };

  return (
    <div className="bg-white p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="border-b border-gray-200">
            <tr className="text-gray-600 text-xs font-medium">
              <th className="py-3 px-4 text-left w-8"></th>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-right">Price</th>
              <th className="py-3 px-4 text-right">1h %</th>
              <th className="py-3 px-4 text-right">24h %</th>
              <th className="py-3 px-4 text-right">7d %</th>
              <th className="py-3 px-4 text-right">Market Cap <span className="text-gray-400">ⓘ</span></th>
              <th className="py-3 px-4 text-right">Volume(24h) <span className="text-gray-400">ⓘ</span></th>
              <th className="py-3 px-4 text-right">Circulating Supply <span className="text-gray-400">ⓘ</span></th>
              <th className="py-3 px-4 text-right">Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr 
                key={asset.id} 
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-4">
                  <button 
                    onClick={() => toggleFavorite(asset.id)}
                    className="text-gray-300 hover:text-yellow-400 focus:outline-none"
                  >
                    {favorites.includes(asset.id) ? "★" : "☆"}
                  </button>
                </td>
                <td className="py-4 px-4 text-gray-600 text-sm">
                  {asset.id}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: asset.iconColor + '15' }} // Light background of the coin color
                    >
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: asset.iconColor }}
                      >
                        {asset.symbol.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{asset.name}</div>
                      <div className="text-gray-500 text-sm">{asset.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-right font-medium text-gray-900">
                  {formatPrice(asset.price)}
                </td>
                <td className="py-4 px-4 text-right">
                  <span className={`text-sm ${asset.change1h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {asset.change1h >= 0 ? '▲' : '▼'} {Math.abs(asset.change1h).toFixed(2)}%
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className={`text-sm ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {asset.change24h >= 0 ? '▲' : '▼'} {Math.abs(asset.change24h).toFixed(2)}%
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className={`text-sm ${asset.change7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {asset.change7d >= 0 ? '▲' : '▼'} {Math.abs(asset.change7d).toFixed(2)}%
                  </span>
                </td>
                <td className="py-4 px-4 text-right text-gray-900">
                  {formatLargeNumber(asset.marketCap)}
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="text-gray-900">{formatLargeNumber(asset.volume)}</div>
                  <div className="text-gray-500 text-xs">{asset.volumeSymbol}</div>
                </td>
                <td className="py-4 px-4 text-right text-gray-900">
                  {asset.circulatingSupply}
                </td>
                <td className="py-4 px-4">
                  <div className="w-32">
                    <Sparklines data={asset.sparklineData} height={40} margin={5}>
                      <SparklinesLine 
                        style={{ 
                          stroke: asset.change7d >= 0 ? "#22C55E" : "#EF4444", 
                          strokeWidth: 2, 
                          fill: "none" 
                        }} 
                      />
                    </Sparklines>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CryptoTable;