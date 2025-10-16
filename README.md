
# 0x0 Frontend (ZeroXZero)

> A modern React + Vite frontend for a crypto-social / token platform: staking, leaderboards, trader discovery, and analytics.  
> Live at **zeroxzero.vercel.app** — see full flows in action.

---

## 🎯 What is 0x0 (ZeroXZero)?

0x0 is a blockchain-forward social / token platform that merges utility and engagement.  
It delivers these core experiences:

- **Landing / Marketing site** — public pages, token/market stats, site marketing, onboarding.  
- **Leaderboard & Trader Discovery** — rank traders, explore user profiles, and surface top performers.  
- **Staking / Rewards UI** — MetaMask wallet connection, approve, stake, unstake, and monitor rewards.  
- **Token & Market Dashboards** — real-time stats, token metrics, market data, and analytics.  

The app is structured for clarity, maintainability, and scalability—built as if ready for production teams.

---

## 🧰 Tech Stack & Key Dependencies

| Layer | Technology / Lib | Purpose |
|---|---|---|
| UI Framework | React (with Vite) | Fast development, HMR, optimized production bundling |
| Styling | Tailwind CSS | Utility-first, themeable, consistent design system |
| Web3 / Blockchain | Ethers.js / Web3 hooks / custom service layer | Wallet connection, contract calls, transaction flows |
| Deployment | Vercel | Continuous deployment, preview URLs, global CDN |
| Project Tools | ESLint / Prettier | Type safety, code quality, formatting consistency |

You can inspect the configurations in `vite.config.js`, `tailwind.config.js`, and the Vercel settings file for how I tailored builds, aliasing, and CSS theming.

---

## 🚀 Features & Highlights

Here are some of the features and architectural decisions that make 0x0 stand out:

### Modular & Component-First UI  
All pages are composed via reusable, well-factored components (cards, tables, charts, modals). This structure eases extension and testing.

### Lazy Loading & Route Splitting  
Routes like `/app/leaderboard`, `/app/staking`, etc., are code-split so users only download what’s needed for each route.

### Wallet & Transaction UX  
- MetaMask Wallet connect built into the header and flows  
- Approval + staking + unstaking flows with pending / success / error feedback  
- Graceful handling of gas, user rejections, and transaction delays  

### Clean Separation: UI vs Blockchain Logic  
On-chain reads/writes are handled via a dedicated service / hook layer. The UI invokes abstracted functions (e.g. `getStakingInfo()`, `stake()`) — making it easier to mock or test.

### Responsive & Accessible Design  
- Mobile-first layout with Tailwind breakpoints  
- Semantic HTML and keyboard-friendly controls  
- Dark / light theming flexibility  

---

## 🛠 Setup & Local Development

```bash
git clone https://github.com/kazisolah114/web3-zeroxzero-frontend.git
cd web3-zeroxzero-frontend
npm install        # or yarn / pnpm
npm run dev        # start local dev server
````

By default, the app reads from `.env` for variables like:

```
VITE_RPC_URL=<your JSON-RPC endpoint>
VITE_CONTRACT_ADDRESS=<staking / token contract>
VITE_API_BASE=<optional backend for leaderboards or stats>
```

Create `.env` (ignored by git) to run locally.

To build for production:

```bash
npm run build
npm run preview
```
