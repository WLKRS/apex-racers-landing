# Apex Racers Landing Page - TODO

## Phase 1: Landing Page & Deployment ✅

- [x] Landing page with hero, sections, and footer
- [x] Whitepaper page with all sections (correct content)
- [x] Navbar with navigation
- [x] GitHub repository created
- [x] Vercel deployment configured
- [x] Live at: https://apex-racers-landing.vercel.app/

## Phase 2: Wallet Integration ✅

- [x] Solana wallet connection (Phantom + Solflare)
- [x] Wallet dropdown with status display
- [x] Logout functionality
- [x] Formatted address display (XXXX...XXXX)

## Phase 3: Dashboard ✅

- [x] Dashboard page with real Solana RPC data
- [x] Real SOL balance fetching
- [x] Real NFT/transaction history
- [x] Game statistics display

## Phase 4: Database & Backend Setup ✅

- [x] Database feature added (MySQL/TiDB)
- [x] tRPC backend configured
- [x] User authentication system
- [x] Database schema for game data

## Phase 5: Fix Build Errors ✅

- [x] Remove vitePluginManusRuntime causing Invalid URL error
- [x] Fix getLoginUrl with environment variable defaults
- [x] Rebuild and deploy to Vercel
- [x] Verify site is working

## Phase 6: Car Mint System (Current)

### Database Schema
- [ ] Create cars table (id, owner_wallet, name, rarity, level, stats)
- [ ] Create car_stats table (acceleration, speed, handling, trunk_space)
- [ ] Create rental_listings table (car_id, owner, price_sol, price_rcn, available)
- [ ] Create marketplace_listings table (car_id, seller, price, status)
- [ ] Create rental_history table (rental_id, car_id, renter, owner, duration)
- [ ] Create upgrades table (id, name, effect, cost_rcn)
- [ ] Create player_inventory table (player_id, upgrade_id, equipped)
- [ ] Push migrations to database

### Car Mint API (tRPC)
- [ ] Create mint car procedure
- [ ] Implement rarity system (Comum 60%, Raro 25%, Epico 12%, Lendario 3%)
- [ ] Generate random stats based on rarity
- [ ] Assign car to player wallet
- [ ] Create list player cars procedure
- [ ] Add cost for minting (SOL or RCN)

### Frontend - Mint Page
- [ ] Create Mint Car page (/mint)
- [ ] Show mint cost
- [ ] Display rarity distribution
- [ ] Show preview of generated car stats
- [ ] Button to mint new car
- [ ] Confirmation dialog

## Phase 7: Game APIs (tRPC)

### Backend APIs
- [ ] Create car management procedures (list, get, update)
- [ ] Create rental system procedures (list, rent, unrent)
- [ ] Create marketplace procedures (list, buy, sell)
- [ ] Create inventory management procedures (equip, unequip)

### Frontend Pages
- [ ] Build Garage page (list cars, manage rentals, equip upgrades)
- [ ] Build Marketplace page (buy/rent filters, bi-token options)
- [ ] Build Racing page (race simulation, rewards, mechanics)
- [ ] Build Refuel page (fuel management, costs)

### Game Mechanics
- [ ] Race simulation logic
- [ ] Reward calculation system
- [ ] Rental income distribution
- [ ] Fuel consumption system
- [ ] Upgrade effects on car stats

## Phase 8: Testing & Deployment

- [ ] Test all game features locally
- [ ] Test wallet integration with real transactions
- [ ] Test marketplace and rental system
- [ ] Deploy to Vercel
- [ ] Test on live environment

## Notes
- **Architecture**: Offchain cars (database) + Bi-token rental (SOL/RCN)
- **Benefits**: No NFT risks, full marketplace control, better UX
- **Tech**: Solana RPC, tRPC backend, React frontend, MySQL database
