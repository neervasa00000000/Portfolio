# ARKIVE walkthrough provenance

Reviewed source commit: `64df35a7b07dc6f812d9289e67a27a6a6d22ea86`. The walkthrough describes implementation, not an independent security audit.

- `frontend/src/hooks/useVault.js`: storeFile validates wallet/network, encrypts, wraps keys, uploads, stamps offline package before registry, and retries pending registration without re-upload.
- `frontend/src/lib/vaultKeyWrap.js`: random AES-256-GCM file keys; EIP-712 wallet-derived wrapping; optional PBKDF2 passphrase wrapping.
- `frontend/src/lib/vaultBundle.js`: ARKV v3 header plus encrypted bytes.
- `frontend/src/lib/vaultCrypto.js`: integrity checks, authenticated decryption, metadata decryption.
- `frontend/src/App.jsx`: private Vault and separate public Community Feed routes.
- `frontend/src/lib/postPublishing.js`: public post storage/transaction checkpoints and retry flow.
- `frontend/src/components/SealModal.jsx`: demo disclosure, offline copy download and partial-success reporting.

The portfolio uses fictional records. It performs no encryption, upload, payment, signing, or recovery-file export. It does not assert permanence, production readiness, or completed security verification.
