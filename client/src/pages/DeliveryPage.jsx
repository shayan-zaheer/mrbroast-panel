import PendingDeliveryOrders from "../components/PendingDeliveryOrders"

function DeliveryPage() {
  return (
    <div className="flex flex-col h-screen bg-[rgb(218,174,120)] px-5">
    <PendingDeliveryOrders />
  </div>
  )
}

export default DeliveryPage