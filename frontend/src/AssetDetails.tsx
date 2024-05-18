export function AssetDetails({ asset }: { asset: any }) {
  if (!asset) {
    return <div className="asset-details">Dados do ativo não disponíveis.</div>;
  }

  return (
    <div className="asset-details">
      <h2>{asset.description || 'Descrição não disponível'}</h2>
      <p><strong>Código do Ativo:</strong> {asset.asset_code || 'Não disponível'}</p>
      <p><strong>Status:</strong> {asset.status_code === 1 ? 'Ativo' : 'Inativo'}</p>
    </div>
  );
}