using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using SchoolManagmentSystem.Data;
using SchoolManagmentSystem.Models;

namespace SchoolManagmentSystem.Controllers
{
    public class AssistantsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AssistantsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Assistants
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.Assistants.Include(a => a.Department).Include(a => a.Professor);
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: Assistants/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Assistants == null)
            {
                return NotFound();
            }

            var assistant = await _context.Assistants
                .Include(a => a.Department)
                .Include(a => a.Professor)
                .FirstOrDefaultAsync(m => m.AssistantID == id);
            if (assistant == null)
            {
                return NotFound();
            }

            return View(assistant);
        }

        // GET: Assistants/Create
        public IActionResult Create()
        {
            ViewData["DepartmentID"] = new SelectList(_context.Departments, "DepartmentID", "Name");
            ViewData["ProfessorID"] = new SelectList(_context.Professors, "ProfessorID", "Email");
            return View();
        }

        // POST: Assistants/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("AssistantID,Name,Surname,Email,BirthDate,HireDate,Address,ProfessorID,DepartmentID")] Assistant assistant)
        {
            if (ModelState.IsValid)
            {
                _context.Add(assistant);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["DepartmentID"] = new SelectList(_context.Departments, "DepartmentID", "Name", assistant.DepartmentID);
            ViewData["ProfessorID"] = new SelectList(_context.Professors, "ProfessorID", "Email", assistant.ProfessorID);
            return View(assistant);
        }

        // GET: Assistants/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Assistants == null)
            {
                return NotFound();
            }

            var assistant = await _context.Assistants.FindAsync(id);
            if (assistant == null)
            {
                return NotFound();
            }
            ViewData["DepartmentID"] = new SelectList(_context.Departments, "DepartmentID", "Name", assistant.DepartmentID);
            ViewData["ProfessorID"] = new SelectList(_context.Professors, "ProfessorID", "Email", assistant.ProfessorID);
            return View(assistant);
        }

        // POST: Assistants/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("AssistantID,Name,Surname,Email,BirthDate,HireDate,Address,ProfessorID,DepartmentID")] Assistant assistant)
        {
            if (id != assistant.AssistantID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(assistant);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AssistantExists(assistant.AssistantID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["DepartmentID"] = new SelectList(_context.Departments, "DepartmentID", "Name", assistant.DepartmentID);
            ViewData["ProfessorID"] = new SelectList(_context.Professors, "ProfessorID", "Email", assistant.ProfessorID);
            return View(assistant);
        }

        // GET: Assistants/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Assistants == null)
            {
                return NotFound();
            }

            var assistant = await _context.Assistants
                .Include(a => a.Department)
                .Include(a => a.Professor)
                .FirstOrDefaultAsync(m => m.AssistantID == id);
            if (assistant == null)
            {
                return NotFound();
            }

            return View(assistant);
        }

        // POST: Assistants/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Assistants == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Assistants'  is null.");
            }
            var assistant = await _context.Assistants.FindAsync(id);
            if (assistant != null)
            {
                _context.Assistants.Remove(assistant);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AssistantExists(int id)
        {
          return (_context.Assistants?.Any(e => e.AssistantID == id)).GetValueOrDefault();
        }
    }
}
