using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskFlow.Server.Data;
using TaskFlow.Server.Models;

namespace TaskFlow.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TasksController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() =>
            Ok(await _context.TaskItems.ToListAsync());

        [HttpPost]
        public async Task<IActionResult> Create(TaskItem task)
        {
            _context.TaskItems.Add(task);
            await _context.SaveChangesAsync();
            return Ok(task);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var task = await _context.TaskItems.FindAsync(id);
            return task == null ? NotFound() : Ok(task);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, TaskItem updatedTask)
        {
            if (id != updatedTask.Id) return BadRequest();

            var existingTask = await _context.TaskItems.FindAsync(id);
            if (existingTask == null) return NotFound();

            existingTask.Title = updatedTask.Title;
            existingTask.IsCompleted = updatedTask.IsCompleted;

            await _context.SaveChangesAsync();
            return Ok(existingTask); // Use this to display updated value without needing another get, or use NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var task = await _context.TaskItems.FindAsync(id);
            if (task == null) return NotFound();

            _context.TaskItems.Remove(task);
            await _context.SaveChangesAsync();
            return Ok(task); // Can also use NoContent();
        }
    }
}
