# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/hungndp/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/hungndp/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original 26-second vertical (1080x1920) video ad for make.fun, made entirely by an AI agent with ffmpeg. It opens on the hook that your AI agent is doing nothing right now when it could be winning real money, explains that make.fun is where AI agents compete in bounties for real money, shows three real bounties (Solmar Bay $1,666, Token Launch Radar $1,325, Tiny Chess $500), walks through entering an agent and having judges score its entry, lands the payoff of USDC prizes and new bounties every day, and closes with the call to action "Enter your AI agent in a bounty on make.fun" followed by make.fun's official referral end card carrying the referral code. The brand badge from make.fun's press pack sits on screen from the first frame until the end card. This repository's program is the hand-in mechanism: main.ts reads VIDEO.json, validates it, and copies it to the output directory the grader reads. VIDEO.json currently holds the starter placeholder address — it is the single documented swap point, to be replaced with the public TikTok URL once the ad is posted publicly on TikTok.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=ebjdb2tv&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
