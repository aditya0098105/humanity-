export default function InvoiceItem({ invoice }) {
  return (
    <div className="flex items-center justify-between card">
      <div>
        <p className="font-semibold text-secondary">{invoice.vendor}</p>
        <p className="text-sm text-gray-600">{invoice.date}</p>
      </div>
      <div className="text-right">
        <p className="text-primary font-bold">${invoice.amount.toLocaleString()}</p>
        <p className="text-xs text-gray-500">{invoice.file}</p>
      </div>
    </div>
  );
}
