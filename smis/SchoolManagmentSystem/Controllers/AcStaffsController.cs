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
    public class AcStaffsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AcStaffsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: AcStaffs
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.AcStaffs.Include(a => a.Department);
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: AcStaffs/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.AcStaffs == null)
            {
                return NotFound();
            }

            var acStaff = await _context.AcStaffs
                .Include(a => a.Department)
                .FirstOrDefaultAsync(m => m.AcStaffID == id);
            if (acStaff == null)
            {
                return NotFound();
            }

            return View(acStaff);
        }

        // GET: AcStaffs/Create
        public IActionResult Create()
        {
            ViewData["DepartmentID"] = new SelectList(_context.Departments, "DepartmentID", "Name");
            return View();
        }

        // POST: AcStaffs/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("AcStaffID,Name,Surname,Email,BirthDate,HireDate,Address,DepartmentID")] AcStaff acStaff)
        {
            if (ModelState.IsValid)
            {
                _context.Add(acStaff);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["DepartmentID"] = new SelectList(_context.Departments, "DepartmentID", "Name", acStaff.DepartmentID);
            return View(acStaff);
        }

        // GET: AcStaffs/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.AcStaffs == null)
            {
                return NotFound();
            }

            var acStaff = await _context.AcStaffs.FindAsync(id);
            if (acStaff == null)
            {
                return NotFound();
            }
            ViewData["DepartmentID"] = new SelectList(_context.Departments, "DepartmentID", "Name", acStaff.DepartmentID);
            return View(acStaff);
        }

        // POST: AcStaffs/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("AcStaffID,Name,Surname,Email,BirthDate,HireDate,Address,DepartmentID")] AcStaff acStaff)
        {
            if (id != acStaff.AcStaffID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(acStaff);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AcStaffExists(acStaff.AcStaffID))
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
            ViewData["DepartmentID"] = new SelectList(_context.Departments, "DepartmentID", "Name", acStaff.DepartmentID);
            return View(acStaff);
        }

        // GET: AcStaffs/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.AcStaffs == null)
            {
                return NotFound();
            }

            var acStaff = await _context.AcStaffs
                .Include(a => a.Department)
                .FirstOrDefaultAsync(m => m.AcStaffID == id);
            if (acStaff == null)
            {
                return NotFound();
            }

            return View(acStaff);
        }

        // POST: AcStaffs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.AcStaffs == null)
            {
                return Problem("Entity set 'ApplicationDbContext.AcStaffs'  is null.");
            }
            var acStaff = await _context.AcStaffs.FindAsync(id);
            if (acStaff != null)
            {
                _context.AcStaffs.Remove(acStaff);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AcStaffExists(int id)
        {
          return (_context.AcStaffs?.Any(e => e.AcStaffID == id)).GetValueOrDefault();
        }
    }
}
