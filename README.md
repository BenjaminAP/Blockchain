# Blockchain
Blockchain use for cryptocurrency transactions. Uses Proof of work for consensus.

Having in mind that blockchain runs in a distributed network,
until I build a GUI for this project you'll have ot use:
- Terminals, commandPromnt, etc. 
  - For windows users I recommend GitBash
- PostMan(app/web) versions
  - this is to make requests.
  
 # Local environment testing.
  Open at least to terminals(GitBash) in project directory and PostMan(app or browser).
  
  1. In one of the terminals run npm run dev.
  
  This should start a Peer-to-peer Networkk in P2P_PORT=5001.
  The application should be running in the HTTP_PORT= 3001
  
  Lets reserve the [5002-5999] ports for P2P connections and
  the [3002-3999] ports for app connections.
  
  # RUN COMMANDS
  
  There are 3 parameters when running this application.
  After running the app for the first time. like instructed earlier,
  to connect with another terminal you must concider 3 things:
  1. The HTTP_PORT you want to connect to.
    - HTTP_PORT=[3002-3999]
  2. The P2P_PORT.
    - P2P_PORT=[5002-5999]
  3. And the already connected PEERS
   - PEERS=ws://localhost:3001
   - for multiple peers separate with (,).
   - PEERS=ws://localhost:5001, ws://localhost:5002, ..., ...
   
   Full Example:
   HTTP_PORT=[3002-3999] P2P_PORT=[5002-5999] PEERS=ws://localhost:5001, ws://localhost:5002 npm run dev
   
   This command is to at least have to "computers" running the blockchain.
   
   # Requests
   ... look at app.js
   
   
