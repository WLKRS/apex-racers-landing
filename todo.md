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

## Phase 5: Game System - Offchain Cars & Bi-Token Rental (Current)

### Database Schema
- [ ] Update schema: cars table (offchain, linked to wallet)
- [ ] Add rental_listings table (SOL or RCN options)
- [ ] Add marketplace_listings table (buy/sell)
- [ ] Add rental_history table (track rentals)
- [ ] Add upgrades/items table (crafting items)
- [ ] Push migrations to database

### Backend APIs (tRPC)
- [ ] Create car management procedures
- [ ] Create rental system procedures (list, rent, unrent)
- [ ] Create marketplace procedures (list, buy, sell)
- [ ] Create inventory management procedures

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

## Phase 6: Testing & Deployment

- [ ] Test all game features locally
- [ ] Test wallet integration with real transactions
- [ ] Test marketplace and rental system
- [ ] Deploy to Vercel
- [ ] Test on live environment

## Notes
- **Architecture**: Offchain cars (database) + Bi-token rental (SOL/RCN)
- **Benefits**: No NFT risks, full marketplace control, better UX
- **Tech**: Solana RPC, tRPC backend, React frontend, MySQL database
