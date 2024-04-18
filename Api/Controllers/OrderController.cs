namespace Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Api.Models;
using Api.Infrastructure.Services;


[ApiController]
[Route("api/[controller]")]
public class OrderController : ControllerBase
{
	private readonly IOrderService _orderService;

	public OrderController(IOrderService orderService) 
	{
		_orderService = orderService;

	}

	[HttpGet("{id:int}")]
	public async Task<ActionResult<IList<Order>>> GetOrders(int id)
	{
		var orders = await _orderService.GetOrders(id);

		return new ActionResult<IList<Order>>(orders);
	}
}