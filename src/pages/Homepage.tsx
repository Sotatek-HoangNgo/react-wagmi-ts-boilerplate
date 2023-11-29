import { useAccount, useConnect } from 'wagmi';
import { toast } from 'react-toastify';

export default function Homepage() {
  const { address } = useAccount();
  const { connectAsync, connectors } = useConnect({});

  const connectWallet = async () => {
    if (typeof window?.ethereum === 'undefined') {
      window.open('https://metamask.io/download/');
    } else {
      try {
        const result = await connectAsync({
          connector: connectors[0],
        });

        console.log('Connect result: ', result);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log('errror');
        console.dir(error);
        if (error?.message === 'Connector not found') {
          window.open('https://metamask.io/download/');
        } else {
          if (error.cause.code === 4001) {
            toast.error("Can't connect to your wallet");
          }
        }
        return;
      }
    }
  };

  return (
    <div>
      {address ? <p>Your wallet address: {address}</p> : <button onClick={connectWallet}>Connect wallet</button>}
    </div>
  );
}
